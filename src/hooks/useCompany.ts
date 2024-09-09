import { CompanyDetails, TCompanyList } from './../../types';
import useSWR from 'swr';
import { apiKey, axiosFetcher, baseURL } from '../utils';


export const useCompanyList = () => {
    const url = `${baseURL}/api/company/list?apiKey=${apiKey}`;
    const { data, error, isLoading: fetchingCompanyList } = useSWR<TCompanyList>(url, axiosFetcher);

    return {
        companyList: data?.data,
        error,
        fetchingCompanyList,
    };
};

export const useCompanyDetails = (id: string) => {
    const url = `${baseURL}/api/company/${id}?apiKey=${apiKey}`;
    const { data, error, isLoading: fetchingCompanyDetails } = useSWR<CompanyDetails>(url, axiosFetcher);
    
    return {
        companyDetails: data,
        error,
        fetchingCompanyDetails,
    };
}