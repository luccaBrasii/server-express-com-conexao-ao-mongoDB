import mongoose from 'mongoose';

const connectDB = async () => {
    try {
      await mongoose.connect(`mongodb+srv://root:root@meudb.uzsalnl.mongodb.net/?retryWrites=true&w=majority`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Conexão com o MongoDB Atlas estabelecida com sucesso!');
    } catch (err) {
      console.error('Erro ao conectar ao MongoDB Atlas:', err);
    }
  };

export default connectDB;
