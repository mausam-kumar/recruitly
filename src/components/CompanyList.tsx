import { Button } from "@mantine/core";
import { useCompanyList } from "../hooks/useCompany";
import CompanyCard from "./CompanyCard";
import ErrorState from "./ErrorState";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";

const CompanyList = () => {
    const { companyList, fetchingCompanyList, error } = useCompanyList()
    const navigate = useNavigate();

  const handleAddCompany = () => {
    navigate(`/add`);
  };

    if (fetchingCompanyList) {
        return <Loader />
    }

    if (error) {
        return <ErrorState />
    }

    return <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        <Button variant="light" color="green" fullWidth radius="md" onClick={handleAddCompany}>
            Add New Company
          </Button>
        {
            companyList?.map(({ name, ownerName, id }) => {
                return <CompanyCard key={id} name={name} ownerName={ownerName} id={id} />
            })
        }
    </div>
};

export default CompanyList