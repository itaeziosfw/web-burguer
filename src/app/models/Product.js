import  Sequelize , { Model } from 'sequelize';
class Product extends Model{
   
   static init(Sequelize){
        super.init(
            {
                name: Sequelize.STRING,
                price: Sequelize.FLOAT,
                category: Sequelize.STRING,
                path: Sequelize.STRING,
            },
            {
            Sequelize,
            }
        );
        
    }

}

export default Product;