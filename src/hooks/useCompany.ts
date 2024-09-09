import { CompanyDetails, CompanyFormValues, TCompanyList } from './../../types';
import useSWR from 'swr';
import { apiKey, axiosFetcher, axiosPoster, baseURL } from '../utils';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


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

export const usePostCompanyDetails = () => {
    const navigate = useNavigate();
    const url = `${baseURL}/api/company/v2?apiKey=${apiKey}`
    const [isPosting, setIsPosting] = useState(false);
    const [postData, setPostData] = useState<CompanyFormValues & { id?: number } | null>(null);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [postError, setPostError] = useState<any>(null);

    const postCompanyDetails = async (payload: CompanyFormValues & { id?: number }) => {
        setIsPosting(true);
        try {
            const data = await axiosPoster(url, payload);
            const { success, message } = data || {}
            if (success === true) {
                navigate(`/`)
                setPostData(data);
                setPostError(null);
            }else{
                setPostError(message)
            }
        } catch (error) {
            setPostError(error);
        } finally {
            setIsPosting(false);
        }
    };

    return {
        postData,
        postError,
        isPosting,
        postCompanyDetails,
    };
};