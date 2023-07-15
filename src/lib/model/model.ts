export interface MyFridge {
    meat: ItemProp[];
    veg: ItemProp[];
    dairy: ItemProp[];
}

export interface ItemProp {
	name: string;
	amount: number;
	exp: Date;
	imgID: string;
}

