import Link from "@material-ui/core/Link"
import { CreateProjectRequest, CreateWorkspaceRequest, GetAllLanguageProgramsResponse } from "api/typesGenerated"
import { FC, useState } from "react"
import { Link as RouterLink, useNavigate } from "react-router-dom"
import { Margins } from "../../components/Margins/Margins"
import {
  PageHeader,
  PageHeaderSubtitle,
  PageHeaderTitle,
} from "../../components/PageHeader/PageHeader"
import { Stack } from "../../components/Stack/Stack"

import { FormFooter, FormSection, HorizontalForm} from "../../components/Form/Form"
import { Button, Chip, FormControlLabel, Radio, RadioGroup, TextField, makeStyles } from "@material-ui/core"
import { FormikContextType, useFormik } from "formik"
import { CreateProjectCard } from "../../components/CreateProjectCard/CreateProjectCard"
import { FullPageHorizontalForm } from "components/FullPageForm/FullPageHorizontalForm"
import { render } from "@testing-library/react"
import { useMe } from "hooks/useMe"
import { AlertBanner } from "components/AlertBanner/AlertBanner"
import { v4 as uuidv4 } from "uuid"
import { send } from "vite"



export const Language = {
  pageTitle: "Create Project",
  yourWorkspacesButton: "Your workspaces",
  allWorkspacesButton: "All workspaces",
  runningWorkspacesButton: "Running workspaces",
  createANewWorkspace: `Create a new workspace from a `,
  template: "Template",
}

export interface CreateProjectPageViewProps {
  languagePrograms?: GetAllLanguageProgramsResponse[] 
  onSubmit: (req: CreateProjectRequest) => void
}

export const CreateProjectPageView: FC<
  React.PropsWithChildren<CreateProjectPageViewProps>
> = ({
  languagePrograms,
  onSubmit,
}) => {
  const [selected, setSelected] = useState('')
  const [error, setError] = useState("")
  const styles = useStyles()
  const navigate = useNavigate()
  const me = useMe()
  const unique_id = uuidv4();

  const form: FormikContextType<CreateProjectRequest> = useFormik<CreateProjectRequest>({
    initialValues: {
      id: unique_id,
      desc: "",
      access_code: unique_id.slice(0,6),
      language_id: "", 
      name: "", 
      owner_id: me.id,
    },

    onSubmit: (values) => {
      if (values.language_id || values.name) {
        form.values.name = values.desc.replace( / /g, "-");
        form.values.access_code = values.id.substring(0,6)
        onSubmit({
          ...values,
        })
        console.log(form.values)
        navigate("/workspaces");
      }
      else {
        setError("Please fill all field to the form")
      }
    },
  })

  if (error) {
    return (
      <AlertBanner
        severity="error"
        text={error}
      />
    )
  }
  
  return (
    <FullPageHorizontalForm title="New workspace" >
      <HorizontalForm onSubmit={form.handleSubmit} >
        <FormSection title={"Name"} description={""}>
          
          <TextField
            id="desc"
            name="desc"
            label="Name"
            variant="outlined"
            fullWidth
            onChange={form.handleChange}
          />   
        </FormSection>   
        <FormSection title={"Language Programs"} description={""}>
        <Stack direction="row" spacing={4}>
          <div className={styles.templates}>
          {languagePrograms && languagePrograms.map((languageProgram) => (
            <CreateProjectCard
              id={languageProgram.id}
              key={languageProgram.id}
              name={languageProgram.name}
              icon={languageProgram.icon}
              checked={selected === languageProgram.name}
              onClick={() => {
                form.values.language_id = languageProgram.id
                console.log(form.values)
                setSelected(languageProgram.name)
              }}
            />
          ))}
          </div>
        </Stack>
        </FormSection>  
        <FormFooter
          onCancel={() => {
          // Go back
          navigate(-1)
        }}
          isLoading={false}
          submitLabel={"Create"}
        />
      </HorizontalForm> 
    </FullPageHorizontalForm>
  )
}
const useStyles = makeStyles((theme) => ({
  filter: {
    width: theme.spacing(26),
    flexShrink: 0,
  },

  filterCaption: {
    textTransform: "uppercase",
    fontWeight: 600,
    fontSize: 12,
    color: theme.palette.text.secondary,
    letterSpacing: "0.1em",
  },

  tagLink: {
    color: theme.palette.text.secondary,
    textDecoration: "none",
    fontSize: 14,
    textTransform: "capitalize",

    "&:hover": {
      color: theme.palette.text.primary,
    },
  },

  tagLinkActive: {
    color: theme.palette.text.primary,
    fontWeight: 600,
  },

  templates: {
    flex: "1",
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: theme.spacing(2),
    gridAutoRows: "min-content",
  },
}))
