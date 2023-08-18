interface Company {
    id: number,
    name: string,
    address: string,
    isArchived: boolean
}

interface User{
    id: number,
    name: string,
    email: string,
    companyId: number,
    isArchived: boolean
}

interface CompanyLocation{
    id: number,
    name: string,
    address: string,
    companyId: number,
    isArchived: boolean
}

interface MenuCategory{
    id: number,
    name: string,
    companyId: number,
    isArchived: boolean
}

interface Menu{
    id: number,
    name: string,
    price: number,
    description: string | null,
    assetUrl?: string,
    isArchived: boolean
}

interface AddonCategory{
    id: number,
    name: string,
    isRequired: boolean,
    isArchived: boolean
}

interface Addon{
    id: number,
    name: string,
    price: number,
    isAvaliable: boolean,
    addonCategoryId: number,
    isArchived: boolean
}

interface Table{
    id: number,
    name: string,
    qrUrl: string,
    locationId: number,
    isArchived: boolean
}

interface MenusMenuCategories{
    id: number,
    menuId: number,
    menuCategoryId: number,
    isArchived: boolean
}

interface MenusAddonCategories{
    id: number,
    menuId: number,
    addonCategoryId: number,
    isArchived: boolean
}

interface MenusLocations{
    id: number,
    menuId: number,
    locationId: number,
    isDisabled: boolean,
    isArchived: boolean
}

interface MenucategoriesLocations{
    id: number,
    menuCategoryId: number,
    locationId: number,
    isDisabled: boolean,
    isArchived: boolean
}

const companies: Company[] = [
    {
        id: 1,
        name: 'Awa Sarr',
        address: 'Hintada Street 49, Sanchaung, Yangon',
        isArchived: false
    },
    {
        id: 2,
        name: 'Mr Yummy',
        address: '33 Street,Kyauk Ta Dar, Yangon',
        isArchived: false
    }
]

const users: User[] = [
    {
        id: 1,
        name: 'koaung',
        email: 'koaung@gmail.com',
        companyId: 1,
        isArchived: false
    },
    {
        id: 2,
        name: 'thura',
        email: 'thura@gmail.com',
        companyId: 1,
        isArchived: false
    },
    {
        id: 3,
        name: 'Ezio',
        email: 'ezio@gmail.com',
        companyId: 2,
        isArchived: false
    }
]

const locations: CompanyLocation[] = [
    {
        id: 1,
        name: 'San Chaung',
        address: 'Shin Saw Pu Street',
        companyId: 1,
        isArchived: false
    },
    {
        id: 2,
        name: 'Hlae Dan',
        address: 'BaHo Street',
        companyId: 1,
        isArchived: false
    },
    {
        id: 3,
        name: 'Lan Ma Taw',
        address: 'War tan street',
        companyId: 2,
        isArchived: false
    }
]

const menuCategories: MenuCategory[] = [
    {
        id: 1,
        name: 'Most Popular',
        companyId: 1,
        isArchived: false
    },
    {
        id: 2,
        name: 'Hot Dish',
        companyId: 1,
        isArchived: false
    },
    {
        id: 3,
        name: 'Cold Dish',
        companyId: 1,
        isArchived: false
    }
]

const menus: Menu[] = [
    {
        id: 1,
        name: 'Shan kout Swel',
        price: 2000,
        description: 'spicy',
        assetUrl: '',
        isArchived:false
    },
    {
        id: 2,
        name: 'Mont Hin Khar',
        price: 1500,
        description: 'Hot',
        assetUrl: '',
        isArchived:false
    },
    {
        id: 3,
        name: 'Shwe Yin Aye',
        price: 3000,
        description: null,
        assetUrl: '',
        isArchived:false
    }
]

const menusMenuCategories: MenusMenuCategories[] = [
  { id: 1, menuId: 1, menuCategoryId: 1, isArchived: false },
  { id: 2, menuId: 1, menuCategoryId: 2, isArchived: false },
  { id: 3, menuId: 2, menuCategoryId: 1, isArchived: false },
  { id: 4, menuId: 2, menuCategoryId: 2, isArchived: false },
  { id: 5, menuId: 3, menuCategoryId: 3, isArchived: false },
]

const addonCategories: AddonCategory[] = [
    {
        id: 1,
        name: 'spiciness',
        isRequired: true,
        isArchived:false
    },
    {
        id: 2,
        name: 'topping',
        isRequired: false,
        isArchived: false
    },
    {
        id: 3,
        name: 'size',
        isRequired: true,
        isArchived: false
    }
]

const addons: Addon[] = [
    {
        id: 1,
        name: 'Super Spicy',
        price: 0,
        isAvaliable: true,
        addonCategoryId: 1,
        isArchived: false
    },
    {
        id: 2,
        name: 'No Spicy',
        price: 0,
        isAvaliable: true,
        addonCategoryId: 1,
        isArchived:false
    },
    {
        id: 3,
        name: 'Pal Kyaw',
        price: 200,
        isAvaliable: true,
        addonCategoryId: 2,
        isArchived: false
    },
    {
        id: 4,
        name: 'Egg',
        price: 400,
        isAvaliable: false,
        addonCategoryId: 2,
        isArchived:false
    },
    {
        id: 5,
        name: 'Normal',
        price: 0,
        isAvaliable: true,
        addonCategoryId: 3,
        isArchived: false
    },
    {
        id: 6,
        name: 'Big',
        price: 200,
        isAvaliable: true,
        addonCategoryId: 3,
        isArchived:false
    }
]

const tables: Table[] = [
  {
    id: 1,
    name: "Table 01",
    qrUrl: "http://eg.com/qr1.jpg",
    locationId: 1,
    isArchived: false,
  },
  {
    id: 2,
    name: "Table 02",
    qrUrl: "http://eg.com/qr2.jpg",
    locationId: 1,
    isArchived: false,
  },
  {
    id: 3,
    name: "Table 03",
    qrUrl: "http://eg.com/qr3.jpg",
    locationId: 1,
    isArchived: false,
  },
]
const menusLocations: MenusLocations[] = [
  { id: 1, menuId: 1, locationId: 1, isDisabled: false, isArchived: false },
  { id: 2, menuId: 1, locationId: 2, isDisabled: false, isArchived: false },
  { id: 3, menuId: 2, locationId: 1, isDisabled: false, isArchived: false },
  { id: 4, menuId: 3, locationId: 1, isDisabled: false, isArchived: false },
];
const menuCategoriesLocations: MenucategoriesLocations[] = [
  {
    id: 1,
    menuCategoryId: 1,
    locationId: 1,
    isDisabled: false,
    isArchived: false,
  },
  {
    id: 2,
    menuCategoryId: 1,
    locationId: 2,
    isDisabled: false,
    isArchived: false,
  },
  {
    id: 3,
    menuCategoryId: 2,
    locationId: 1,
    isDisabled: false,
    isArchived: false,
  },
  {
    id: 4,
    menuCategoryId: 3,
    locationId: 1,
    isDisabled: false,
    isArchived: false,
  },
]

//Q:1------ return all menus that are connected to menuCategoryId in param -------
const findMenusByMenuCategoryId = (menuCategoryId: number) =>
{
    return menus.filter((x) =>
        menusMenuCategories.filter((y) => y.menuCategoryId === menuCategoryId).map((x) => x.menuId).includes(x.id));
}
console.log(findMenusByMenuCategoryId(2));

//Q:2------ return all menuCategories that are connected to menuId in param ------
const findMenuCategoriesByMenuId = (menuId: number) => { 
    return menuCategories.filter((x) =>
        menusMenuCategories.filter((y) => y.menuId === menuId).map((x) => x.menuCategoryId).includes(x.id));
}
console.log(findMenuCategoriesByMenuId(1));

//Q:3------ return all addons that are connected to a addonCategoryId in param ------
const findAddonsByAddonCategoryId = (addonCategoryId: number) => {
    return addons.filter((x) => addonCategories.filter((y) => y.id === addonCategoryId).map((x) => x.id).includes(x.addonCategoryId));
}
console.log(findAddonsByAddonCategoryId(3));

//Q:4------ return addonCategory that is connected to addonId in param------
const findAddonCategoryByAddonId = (addonId: number) => {
    return addonCategories.filter((x) => addons.filter((y) => y.addonCategoryId === addonId).map((x) => x.addonCategoryId).includes(x.id));
 }
console.log(findAddonCategoryByAddonId(2));