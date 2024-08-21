import { Container, Typography, Paper } from '@mui/material';
import FaithContent from './FaithContent';



function Faith() {
    return (
        <Container
            component="main" 
            maxWidth="sm"
        >
            <Paper 
                sx={{ textAlign: 'center', mt: 1}}
                elevation={3}
            >
                <Typography variant="h4" component="h1">生活信念</Typography>
            </Paper>
            <FaithContent />
        </Container>
    );
}

export default Faith;