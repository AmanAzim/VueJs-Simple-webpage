var app=new Vue(
{
	el:'#app',
	data:
	{
		product: 'Socks',
		brand:'Warm Me',
		selectedVarient:0, //image:'vmSocks-green-onWhite.jpg',
		display_discount:true,
		inventory:100,
		//inStock:false,
		details:["80% Coton", "20% Polyester", "Gender-Neutral"],
		variants:[
					{variantId:224,
					variantColour:"Green",
					variantQuantity:100,
					variantImage:'vmSocks-green-onWhite.jpg'},
					{variantId:225,
					variantColour:"Blue",
					variantQuantity:8,
					variantImage:'vmSocks-blue-onWhite.jpg'},
				],
		cart:0
	},
	methods:
	{
		addToCart: function(){ this.cart +=1},
		updateProductImage: function(index){this.selectedVarient=index;
										console.log(index);}	   //updateProduct: function(variantImage){this.image=variantImage;}
																												
	},
	computed:
	{
		title()
		{
			return this.brand+" "+this.product;
		},
		image()
		{
			return this.variants[this.selectedVarient].variantImage;
		},
		inStock()
		{
			return this.variants[this.selectedVarient].variantQuantity;
		},
		onSale()
		{
			return "On Sale:";
		}
	}
}
)