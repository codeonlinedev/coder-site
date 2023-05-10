import {
    QueryKey,
    useMutation,
    useQuery,
    useQueryClient,
  } from "@tanstack/react-query"
  import {

  } from "api/typesGenerated"
  import { getProjectbyName } from "api/api"
  import { displayError } from "components/GlobalSnackbar/utils"
  import { useTranslation } from "react-i18next"

  export const useProjectData = (project_name: string) => {
    const queryKey = ["project", project_name]
    const result = useQuery({
      queryKey,
      queryFn: () =>
        getProjectbyName(project_name),
      refetchInterval: 5_000,
    })
  
    return {
      ...result,
      queryKey,
    }
  }