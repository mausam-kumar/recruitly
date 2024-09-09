import { useCompanyList } from "../hooks/useCompany";
import CompanyCard from "./CompanyCard";
import ErrorState from "./ErrorState";
import Loader from "./Loader";

const CompanyList = () => {
    const { companyList, fetchingCompanyList, error } = useCompanyList()

    if (fetchingCompanyList) {
        return <Loader />
    }

    if (error) {
        return <ErrorState />
    }

    return <div>
        {
            companyList?.map(({ name, ownerName, id }) => {
                return <CompanyCard key={id} name={name} ownerName={ownerName} id={id} />
            })
        }
    </div>
};

export default CompanyList