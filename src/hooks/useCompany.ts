import useSWR from 'swr';
import { apiKey, axiosFetcher, baseURL } from '../utils';

type TCompanyList = {
    data: {
        name: string,
        ownerName: string,
        id: string
    }[]
}

export const useCompany = () => {
  const url = `${baseURL}/api/company/list?apKey=${apiKey}`;
  const { data, error, isLoading: fetchingCompanyList } = useSWR<TCompanyList>(url, axiosFetcher);

  return {
    companyList: data?.data,
    error,
    fetchingCompanyList,
  };
};