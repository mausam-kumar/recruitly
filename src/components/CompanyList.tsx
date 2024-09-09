import { useCompany } from "../hooks/useCompany";
import CompanyCard from "./CompanyCard";
import ErrorState from "./ErrorState";
import Loader from "./Loader";

const CompanyList = () => {
    const { companyList, fetchingCompanyList, error } = useCompany()
    if (fetchingCompanyList) {
        return <Loader />
    }

    if (error) {
        return <ErrorState />
    }

    return <div>
        {
            companyList?.map(({ name, ownerName, id }) => {
                return <CompanyCard name={name} ownerName={ownerName} id={id} />
            })
        }
    </div>
};

export default CompanyList