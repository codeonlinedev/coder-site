import Link from "@material-ui/core/Link"
import { FC, useState } from "react"
import { Link as RouterLink, useNavigate } from "react-router-dom"

import { FormFooter, FormSection, HorizontalForm} from "../../components/Form/Form"
import { Button, Chip, FormControlLabel, Radio, RadioGroup, TextField, makeStyles } from "@material-ui/core"
import { FormikContextType, useFormik } from "formik"
import { FullPageHorizontalForm } from "components/FullPageForm/FullPageHorizontalForm"
import { editProject } from "api/api"
import { removeVietnameseTones } from "util/formUtils"
import { displaySuccess } from "components/GlobalSnackbar/utils"

export interface EditProjectPageViewProps {
  project_id: string
  project_desc: string
  project_name: string
}

export const EditProjectPageView: FC<
  React.PropsWithChildren<EditProjectPageViewProps>
> = ({
  project_id,
  project_desc,
  project_name,
}) => {
  const navigate = useNavigate()
  const id_name = project_name.substring(project_name.length - 6)

  const form = useFormik({
    initialValues: {
      desc: project_desc
    },

    onSubmit: (values) => {
      var nameNormalize = values.desc.replace(" ", "_")
      nameNormalize = removeVietnameseTones(nameNormalize)
      nameNormalize = nameNormalize.toLowerCase() + '_' + id_name
      editProject(project_id, nameNormalize, values.desc).then(() => {
        displaySuccess("Success")
        navigate("/projects");
      })
      
    },
  })
  return (
    <FullPageHorizontalForm title="Edit Project" detail="Edit your Project information">
      <HorizontalForm onSubmit={form.handleSubmit} >
        <FormSection title={"Name"} description={""}>
          <TextField
            id="desc"
            name="desc"
            label="Name"
            variant="outlined"
            fullWidth
            onChange={form.handleChange}
            value={form.values.desc}
            required
          />   
        </FormSection>   
        <FormFooter
          onCancel={() => {
          // Go back
          navigate(-1)
        }}
          isLoading={false}
          submitLabel={"Edit"}
        />
      </HorizontalForm> 
    </FullPageHorizontalForm>
  )
}
