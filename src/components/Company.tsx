import { useParams } from 'react-router-dom';
import CompanyDetails from './CompanyDetails';
import { useCompanyDetails } from '../hooks/useCompany';
import Loader from './Loader';
import ErrorState from './ErrorState';

const Company = () => {
    const params = useParams()
    const id = params.id as string
    const { companyDetails, fetchingCompanyDetails, error } = useCompanyDetails(id)

    if (fetchingCompanyDetails) {
        return <Loader />
    }

    if (error || !companyDetails) {
        return <ErrorState message='Error while fetching company details' />
    }

    return <CompanyDetails company={companyDetails} />;
};

export default Company;
