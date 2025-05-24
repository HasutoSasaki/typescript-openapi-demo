import express from 'express';
import apiRoutes from './routes/apiRoutes';
import path from 'path';
import YAML from 'yamljs';
import swaggerUi from 'swagger-ui-express';

const app = express();
const PORT = process.env.PORT || 3300;

const openApiPath = path.join(__dirname, '../openapi.yaml');
const swaggerDocument = YAML.load(openApiPath);

app.use(express.json());
app.use('/api', apiRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`API documentation available at http://localhost:${PORT}/api-docs`);
});