import React, { useState } from 'react';
import SideBar from './shared/Sidebar.jsx';
import Header from './shared/Header.jsx';
import {
    Button,
    Chip,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from '@mui/material';

const initialOrders = [
    {
        code: 'ORD123',
        productCount: 5,
        clientName: 'John Smith',
        totalValue: 100,
        status: 'commande',
        date: '2024-08-22',
    },
    {
      code: 'ORD1305',
      productCount: 5,
      clientName: 'maryem',
      totalValue: 100,
      status: 'commande',
      date: '2024-05-13',
  },
    // Add more orders as needed
];

const statusColors = {
    commande: 'warning',
    colis: 'info',
    'en cours de livraison': 'primary',
    livrée: 'success',
};

const GestionCommandes = () => {
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [filteredOrders, setFilteredOrders] = useState(initialOrders);

    const filterOrders = (month, year) => {
        const filtered = initialOrders.filter((order) => {
            const orderDate = new Date(order.date);
            const orderMonth = orderDate.getMonth() + 1; // Months are 0-based in JS
            const orderYear = orderDate.getFullYear();

            return (
                (!month || orderMonth === parseInt(month)) &&
                (!year || orderYear === parseInt(year))
            );
        });

        setFilteredOrders(filtered);
    };

    const handleMonthChange = (event) => {
        const newMonth = event.target.value;
        setMonth(newMonth);
        filterOrders(newMonth, year); // Pass the current year to the filter function
    };

    const handleYearChange = (event) => {
        const newYear = event.target.value;
        setYear(newYear);
        filterOrders(month, newYear); // Pass the current month to the filter function
    };

    const handleViewProducts = (orderCode) => {
        alert(`Voir les produits de la commande ${orderCode}`);
        // Add logic to display the products
    };

    const handleConvertToPackage = (orderCode) => {
        setFilteredOrders((prevOrders) =>
            prevOrders.map((order) =>
                order.code === orderCode ? { ...order, status: 'colis' } : order
            )
        );
        alert(`La commande ${orderCode} a été convertie en colis.`);
    };

    return (
        <div className="app-container">
            <div className="w-1/4">
                <SideBar />
            </div>
            <div style={{ padding: 20, boxSizing: 'border-box', width: 'calc(100% - 250px)', marginLeft: 250 }}>
                <Paper elevation={3} style={{ padding: 30, marginBottom: 30, backgroundColor: '#f7f7f7' }}>
                    <Typography variant="h5" gutterBottom style={{ fontWeight: 600 }}>
                        Filtrer les Commandes
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth variant="outlined">
                                <InputLabel>Mois</InputLabel>
                                <Select value={month} onChange={handleMonthChange} label="Mois">
                                    <MenuItem value="1">Janvier</MenuItem>
                                    <MenuItem value="2">Février</MenuItem>
                                    <MenuItem value="3">Mars</MenuItem>
                                    <MenuItem value="4">Avril</MenuItem>
                                    <MenuItem value="5">Mai</MenuItem>
                                    <MenuItem value="6">Juin</MenuItem>
                                    <MenuItem value="7">Juillet</MenuItem>
                                    <MenuItem value="8">Août</MenuItem>
                                    <MenuItem value="9">Septembre</MenuItem>
                                    <MenuItem value="10">Octobre</MenuItem>
                                    <MenuItem value="11">Novembre</MenuItem>
                                    <MenuItem value="12">Décembre</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth variant="outlined">
                                <InputLabel>Année</InputLabel>
                                <Select value={year} onChange={handleYearChange} label="Année">
                                    <MenuItem value="2024">2024</MenuItem>
                                    <MenuItem value="2023">2023</MenuItem>
                                    {/* Add more years as needed */}
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Paper>

                <Paper elevation={3} style={{ padding: 30, backgroundColor: '#ffffff' }}>
                    <Typography variant="h5" gutterBottom style={{ fontWeight: 600 }}>
                        Liste des Commandes
                    </Typography>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell style={{ fontWeight: 700 }}>Code de la commande</TableCell>
                                    <TableCell style={{ fontWeight: 700 }}>Nombre de produits</TableCell>
                                    <TableCell style={{ fontWeight: 700 }}>Nom du client</TableCell>
                                    <TableCell style={{ fontWeight: 700 }}>Valeur totale de la commande</TableCell>
                                    <TableCell style={{ fontWeight: 700 }}>Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {filteredOrders.map((order) => (
                                    <TableRow key={order.code}>
                                        <TableCell>{order.code}</TableCell>
                                        <TableCell>{order.productCount}</TableCell>
                                        <TableCell>{order.clientName}</TableCell>
                                        <TableCell>{order.totalValue} €</TableCell>
                                        <TableCell>
                                            <Button
                                                onClick={() => handleViewProducts(order.code)}
                                                variant="contained"
                                                color="primary"
                                                size="small"
                                                style={{ marginRight: 10 }}
                                            >
                                                Voir les produits
                                            </Button>
                                            <Button
                                                onClick={() => handleConvertToPackage(order.code)}
                                                variant="contained"
                                                color="secondary"
                                                size="small"
                                            >
                                                Convertir en colis
                                            </Button>
                                            <Chip
                                                label={order.status}
                                                color={statusColors[order.status] || 'default'}
                                                style={{ marginLeft: 10, marginTop: 10 }}
                                            />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </div>
            <Header />
        </div>
    );
};

export default GestionCommandes;

