import React from 'react';
import AddEditCompanyForm from './CompanyForm';
import BackButton from './BackButton';


const AddCompany: React.FC = () => {

    return <div>
        <BackButton />
        <AddEditCompanyForm />
    </div>;
};

export default AddCompany;