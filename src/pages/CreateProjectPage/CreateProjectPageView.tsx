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


function removeVietnameseTones(str: string) {
  str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
  str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
  str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
  str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
  str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
  str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
  str = str.replace(/đ/g,"d");
  str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
  str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
  str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
  str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
  str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
  str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
  str = str.replace(/Đ/g, "D");

  str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
  str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư

  str = str.replace(/ /g,"_");
  str = str.trim();

  // str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
  return str;
}

export const Language = {
  pageTitle: "Create Project",
  yourWorkspacesButton: "Your projects",
  allWorkspacesButton: "All projects",
  runningWorkspacesButton: "Running projects",
  createANewWorkspace: `Create a new workspace from a `,
  template: "Template",
}

export interface CreateProjectPageViewProps {
  languagePrograms?: GetAllLanguageProgramsResponse[] 
  onSubmit: (req: CreateProjectRequest) => void
  creatingProject: boolean
}

export const CreateProjectPageView: FC<
  React.PropsWithChildren<CreateProjectPageViewProps>
> = ({
  languagePrograms,
  onSubmit,
  creatingProject
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
        const random = String(Math.floor(Math.random() * 899998) + 100001);
        var nameNormalize = values.desc.replace(" ", "_")
        nameNormalize = removeVietnameseTones(nameNormalize)
        nameNormalize = nameNormalize.toLowerCase() + '_' + random
        form.values.name = nameNormalize 

        form.values.access_code = values.id.substring(0,6)
        onSubmit({
          ...values,
        })
        navigate("/projects");
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
    <FullPageHorizontalForm title="New project" >
      <HorizontalForm onSubmit={form.handleSubmit} >
        <FormSection title={"Name"} description={""}>
          
          <TextField
            id="desc"
            name="desc"
            label="Name"
            variant="outlined"
            fullWidth
            onChange={form.handleChange}
            required
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
          isLoading={creatingProject}
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
