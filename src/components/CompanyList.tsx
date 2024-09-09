import { Button, Flex } from "@mantine/core";
import { useCompanyList } from "../hooks/useCompany";
import CompanyCard from "./CompanyCard";
import ErrorState from "./ErrorState";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const CompanyList = () => {
    const { companyList, fetchingCompanyList, error } = useCompanyList()
    const { logout } = useAuth()
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
        <Flex gap={16} justify="space-between">
            <Button variant="light" color="green" radius="md" onClick={handleAddCompany}>
                Add New Company
            </Button>
            <Button variant="light" color="red" radius="md" onClick={logout}>
                Logout
            </Button>
        </Flex>
        {
            companyList?.map(({ name, ownerName, id }) => {
                return <CompanyCard key={id} name={name} ownerName={ownerName} id={id} />
            })
        }
    </div>
};

export default CompanyList