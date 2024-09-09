import React from 'react';
import { Card, Text, Group, Stack, Badge, Avatar } from '@mantine/core';
import { CompanyDetails as TCompanyDetails } from '../../types';
import BackButton from '../BackButton';

type CompanyProps = {
    company: TCompanyDetails;
}

const CompanyDetails: React.FC<CompanyProps> = ({ company }) => {
    return (
        <>
            <BackButton />
            <Card shadow="sm" padding="lg" mt={30} radius="md" withBorder>
                <Group >
                    <Group>
                        <Avatar size="lg" src={company.facebook ? company.facebook : null} alt={company.name} radius="xl" />
                        <Stack>
                            <Text size="xl">{company.name}</Text>
                            <Text size="sm">{company.ownerName}</Text>
                        </Stack>
                    </Group>
                    <Badge color="green" size="lg">
                        {company.rating} Stars
                    </Badge>
                </Group>

                <Text size="sm" mt="md" dangerouslySetInnerHTML={{ __html: company.description }} />

                <Group mt="md">
                    <Text>{`${company.headOffice.address.cityName}, ${company.headOffice.address.regionName}, ${company.headOffice.address.country}`}</Text>
                </Group>

                <Group mt="xs">
                    <Text>{company.phone}</Text>
                </Group>

                <Group mt="xs">
                    <Text>{company.email}</Text>
                </Group>

                {company.website && (
                    <Group mt="xs">

                        <Text component="a" href={company.website} target="_blank" rel="noopener noreferrer">
                            {company.website}
                        </Text>
                    </Group>
                )}

                <Stack mt="md">
                    <Text size="sm">Employees: {company.employees}</Text>
                    <Group>
                        {company.tags.map((tag, index) => (
                            <Badge key={index} color="blue" variant="light">
                                {tag.value}
                            </Badge>
                        ))}
                    </Group>
                </Stack>
            </Card>
        </>
    );
};

export default CompanyDetails;
