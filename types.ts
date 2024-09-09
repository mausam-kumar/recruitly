export type TCompanyList = {
    data: {
        name: string,
        ownerName: string,
        id: string
    }[]
}

type Address = {
    cityName: string;
    regionName: string;
    country: string;
}

type HeadOffice = {
    address: Address;
}

type Tag = {
    key: string;
    value: string;
}

export type CompanyDetails = {
    name: string;
    ownerName: string;
    description: string;
    headOffice: HeadOffice;
    website: string;
    email: string;
    phone: string;
    rating: number;
    employees: string;
    tags: Tag[];
    facebook: string;
    linkedIn: string;
    twitter: string;
}

export type CompanyFormValues = {
    city: string;
    countryName: string;
    description: string;
    name: string;
    phone: string;
  }
  