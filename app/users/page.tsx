import { User, columns } from "./columns";
import { DataTable } from "./data-table";

const getData = async (): Promise<User[]> => {
    return [
        {
            id: "728ed521",
            avatar: "/users/1.png",
            status: "active",
            fullName: "Ali Ahmadi",
            email: "ali.ahmadi@gmail.com",
        },
        {
            id: "728ed522",
            avatar: "/users/2.png",
            status: "active",
            fullName: "Sara Mohammadi",
            email: "sara.mohammadi@gmail.com",
        },
        {
            id: "728ed523",
            avatar: "/users/3.png",
            status: "inactive",
            fullName: "Reza Karimi",
            email: "reza.karimi@gmail.com",
        },
        {
            id: "728ed524",
            avatar: "/users/4.png",
            status: "inactive",
            fullName: "Maryam Hosseini",
            email: "maryam.hosseini@gmail.com",
        },
        {
            id: "728ed525",
            avatar: "/users/5.png",
            status: "active",
            fullName: "Mohammad Rezaei",
            email: "mohammad.rezaei@gmail.com",
        },
        {
            id: "728ed526",
            avatar: "/users/6.png",
            status: "active",
            fullName: "Nima Moradi",
            email: "nima.moradi@gmail.com",
        },
        {
            id: "728ed527",
            avatar: "/users/7.png",
            status: "active",
            fullName: "Mina Ahmadi",
            email: "mina.ahmadi@gmail.com",
        },
        {
            id: "728ed528",
            avatar: "/users/8.png",
            status: "active",
            fullName: "Sahar Rahimi",
            email: "sahar.rahimi@gmail.com",
        },
        {
            id: "728ed529",
            avatar: "/users/9.png",
            status: "inactive",
            fullName: "Amir Hosseini",
            email: "amir.hosseini@gmail.com",
        },
        {
            id: "728ed52a",
            avatar: "/users/10.png",
            status: "active",
            fullName: "Arman Karimi",
            email: "arman.karimi@gmail.com",
        },
        {
            id: "728ed52b",
            avatar: "/users/11.png",
            status: "active",
            fullName: "Pouya Ebrahimi",
            email: "pouya.ebrahimi@gmail.com",
        },
        {
            id: "728ed52c",
            avatar: "/users/12.png",
            status: "active",
            fullName: "Hamed Rezaei",
            email: "hamed.rezaei@gmail.com",
        },
        {
            id: "728ed52d",
            avatar: "/users/13.png",
            status: "inactive",
            fullName: "Elham Mohammadi",
            email: "elham.mohammadi@gmail.com",
        },
        {
            id: "728ed52e",
            avatar: "/users/14.png",
            status: "active",
            fullName: "Sina Ahmadi",
            email: "sina.ahmadi@gmail.com",
        },
        {
            id: "728ed52f",
            avatar: "/users/15.png",
            status: "active",
            fullName: "Morteza Karimi",
            email: "morteza.karimi@gmail.com",
        },
        {
            id: "728ed52g",
            avatar: "/users/16.png",
            status: "inactive",
            fullName: "Yasin Mohammadi",
            email: "yasin.mohammadi@gmail.com",
        },
        {
            id: "728ed52h",
            avatar: "/users/17.png",
            status: "active",
            fullName: "Nazanin Ahmadi",
            email: "nazanin.ahmadi@gmail.com",
        },
        {
            id: "728ed52i",
            avatar: "/users/18.png",
            status: "active",
            fullName: "Kian Rahimi",
            email: "kian.rahimi@gmail.com",
        },
        {
            id: "728ed52j",
            avatar: "/users/19.png",
            status: "inactive",
            fullName: "Shirin Hosseini",
            email: "shirin.hosseini@gmail.com",
        },
        {
            id: "728ed52k",
            avatar: "/users/20.png",
            status: "active",
            fullName: "Saeed Moradi",
            email: "saeed.moradi@gmail.com",
        },
        {
            id: "728ed52l",
            avatar: "/users/21.png",
            status: "active",
            fullName: "Leila Karimi",
            email: "leila.karimi@gmail.com",
        },
        {
            id: "728ed52m",
            avatar: "/users/22.png",
            status: "active",
            fullName: "Farhad Ahmadi",
            email: "farhad.ahmadi@gmail.com",
        },
        {
            id: "728ed52n",
            avatar: "/users/23.png",
            status: "inactive",
            fullName: "Zahra Hosseini",
            email: "zahra.hosseini@gmail.com",
        },
        {
            id: "728ed52o",
            avatar: "/users/24.png",
            status: "active",
            fullName: "Mehdi Rahimi",
            email: "mehdi.rahimi@gmail.com",
        },
        {
            id: "728ed52p",
            avatar: "/users/25.png",
            status: "active",
            fullName: "Parsa Mohammadi",
            email: "parsa.mohammadi@gmail.com",
        },
        {
            id: "728ed52q",
            avatar: "/users/26.png",
            status: "active",
            fullName: "Shahab Karimi",
            email: "shahab.karimi@gmail.com",
        },
        {
            id: "728ed52r",
            avatar: "/users/27.png",
            status: "active",
            fullName: "Ramin Ebrahimi",
            email: "ramin.ebrahimi@gmail.com",
        },
        {
            id: "728ed52s",
            avatar: "/users/28.png",
            status: "inactive",
            fullName: "Behzad Rahimi",
            email: "behzad.rahimi@gmail.com",
        },
        {
            id: "728ed52t",
            avatar: "/users/29.png",
            status: "active",
            fullName: "Omid Ahmadi",
            email: "omid.ahmadi@gmail.com",
        },
        {
            id: "728ed52u",
            avatar: "/users/30.png",
            status: "active",
            fullName: "Hamid Rezaei",
            email: "hamid.rezaei@gmail.com",
        },
        {
            id: "728ed52v",
            avatar: "/users/31.png",
            status: "active",
            fullName: "Shadi Mohammadi",
            email: "shadi.mohammadi@gmail.com",
        },
        {
            id: "728ed52w",
            avatar: "/users/32.png",
            status: "active",
            fullName: "Arash Karimi",
            email: "arash.karimi@gmail.com",
        },
        {
            id: "728ed52x",
            avatar: "/users/33.png",
            status: "inactive",
            fullName: "Mona Hosseini",
            email: "mona.hosseini@gmail.com",
        },
        {
            id: "728ed52y",
            avatar: "/users/34.png",
            status: "active",
            fullName: "Milad Moradi",
            email: "milad.moradi@gmail.com",
        },
        {
            id: "728ed52z",
            avatar: "/users/35.png",
            status: "active",
            fullName: "Shayan Ahmadi",
            email: "shayan.ahmadi@gmail.com",
        },
        {
            id: "728ed521f",
            avatar: "/users/36.png",
            status: "active",
            fullName: "Arezoo Rahimi",
            email: "arezoo.rahimi@gmail.com",
        },
    ];
};

const UsersPage = async () => {
    const data = await getData();

    return (
        <div className="">
            <div className="mb-8 px-4 py-2 bg-secondary rounded-md">
                <h1 className="font-semibold">All Users</h1>
            </div>

            <DataTable columns={columns} data={data} />
        </div>
    );
};

export default UsersPage;
