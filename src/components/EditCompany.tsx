import React from 'react';
import AddEditCompanyForm from './CompanyForm';
import BackButton from './BackButton';
import { useCompanyDetails } from '../hooks/useCompany';
import { useParams } from 'react-router-dom';
import Loader from './Loader';


const EditCompany: React.FC = () => {
    const params = useParams()
    const id = params.id as string
    const { companyDetails, fetchingCompanyDetails } = useCompanyDetails(id)

    const initialValues = {
        city: companyDetails?.headOffice.address.cityName || "",
        countryName: companyDetails?.headOffice.address.country || "",
        description: companyDetails?.description || "",
        name: companyDetails?.name || "",
        phone: companyDetails?.phone || "",
    };

    if (fetchingCompanyDetails) {
        return <Loader />
    }

    return <div>
        <BackButton />
        <AddEditCompanyForm id={id} initialValues={initialValues} />
    </div>;
};

export default EditCompany;