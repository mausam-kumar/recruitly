import { TextInput, Button, Text } from '@mantine/core';
import { useForm } from '@mantine/form';
import { CompanyFormValues } from '../../types';
import { usePostCompanyDetails } from '../hooks/useCompany';

type AddEditCompanyFormProps = {
    initialValues?: CompanyFormValues;
    id?: string
}

const AddEditCompanyForm: React.FC<AddEditCompanyFormProps> = ({ initialValues, id }) => {
    const { postCompanyDetails, postError } = usePostCompanyDetails()
    const form = useForm<CompanyFormValues>({
        mode: "controlled",
        initialValues: initialValues || {
            city: '',
            countryName: '',
            description: '',
            name: '',
        },
    });

    const onSubmit = (data: CompanyFormValues) => {
        if (form.isDirty() && id) {
            postCompanyDetails({...data, id })
        }else{

            postCompanyDetails(data)
        }
    }

    return (
        <form onSubmit={form.onSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: 12, width: "full" }}>
            <TextInput
                label="City"
                placeholder="Enter city"
                {...form.getInputProps('city')}
            />
            <TextInput
                label="Country Name"
                placeholder="Enter country name"
                {...form.getInputProps('countryName')}
            />
            <TextInput
                label="Description"
                placeholder="Enter description"
                {...form.getInputProps('description')}
            />
            <TextInput
                label="Name"
                placeholder="Enter name"
                required
                {...form.getInputProps('name')}
            />
            {postError && <Text my={20}>{postError}</Text>}
            <Button type="submit" >Submit</Button>
        </form>
    );
};

export default AddEditCompanyForm;