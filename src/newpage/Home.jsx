import { useEffect, useState } from 'react';
import bsiImage from '../assets/bsi.png';
import Header from './Header';
import { Space, Table, Tag, Pagination } from 'antd';
// import {TableProps} from 'antd'

const columns = [
    {
      title: 'First Name',
      dataIndex: 'FirstName',
      key: 'FirstName',
      render: (text) => <a>{text}</a>,
    },
    {
        title: 'Last Name',
        dataIndex: 'LastName',
        key: 'LastName',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Birth Date',
        dataIndex: 'BirthDate',
        key: 'birthdate',
        render: (text) => <a>{text}</a>,
    },
    {
      title: 'University',
      dataIndex: 'university',
      key: 'university',
    },

   
  ];

function HomePage(){

    // const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch('https://dummyjson.com/users');
                const data = await response.json();
                setUsers(data.users);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []); 

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentUsers = users.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <table className="table table-striped table-hover" style={{
                                width: '100%',
                                borderCollapse: 'collapse',
                                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                                margin: '2rem 0',
                                backgroundColor: '#ffffff',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                fontFamily: 'Arial, sans-serif',
                                border: '1px solid #eaeaea',
                                transition: 'all 0.3s ease'
                            }}>
                    <thead style={{
                        backgroundColor: '#2c3e50',
                        color: 'white',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                    }}>
                        <th style={{ padding: '15px', borderBottom: '2px solid #34495e' }}>ID</th>
                        <th style={{ padding: '15px', borderBottom: '2px solid #34495e' }}>First Name</th>
                        <th style={{ padding: '15px', borderBottom: '2px solid #34495e' }}>Last Name</th>
                        <th style={{ padding: '15px', borderBottom: '2px solid #34495e' }}>Email</th>
                        <th style={{ padding: '15px', borderBottom: '2px solid #34495e' }}>University</th>
                        <th style={{ padding: '15px', borderBottom: '2px solid #34495e' }}>Gender</th>
                        <th style={{ padding: '15px', borderBottom: '2px solid #34495e' }}>Bank Card Expire</th>
                    </thead>
                    <tbody> 
                        {currentUsers.map((user) => (
                            <tr key={user.id} style={{
                                backgroundColor: user.id % 2 === 0 ? '#f8f9fa' : '#e9ecef',
                                transition: 'all 0.2s ease',
                                ':hover': {
                                    backgroundColor: '#f5f6fa',
                                    transform: 'scale(1.01)'
                                }
                            }}>
                                <td style={{ padding: '12px', borderBottom: '1px solid #dcdde1' }}>{user.id}</td>
                                <td style={{ padding: '12px', borderBottom: '1px solid #dcdde1' }}>{user.firstName}</td>
                                <td style={{ padding: '12px', borderBottom: '1px solid #dcdde1' }}>{user.lastName}</td>
                                <td style={{ padding: '12px', borderBottom: '1px solid #dcdde1' }}>
                                    <a href={`mailto:${user.email}`} style={{ color: '#3498db', textDecoration: 'none' }}>
                                        {user.email}
                                    </a>
                                </td>
                                <td style={{ padding: '12px', borderBottom: '1px solid #dcdde1' }}>
                                    <span style={{ 
                                        backgroundColor: '#e1f5fe',
                                        padding: '4px 8px',
                                        borderRadius: '4px',
                                        color: '#0288d1'
                                    }}>
                                        {user.university}
                                    </span>
                                </td>
                                <td style={{ padding: '12px', borderBottom: '1px solid #dcdde1' }}>
                                    <span style={{ 
                                        backgroundColor: user.gender === 'male' ? '#e8f5e9' : '#fce4ec',
                                        padding: '4px 8px',
                                        borderRadius: '4px',
                                        color: user.gender === 'male' ? '#2e7d32' : '#c2185b'
                                    }}>
                                        {user.gender}
                                    </span>
                                </td>
                                <td style={{ padding: '12px', borderBottom: '1px solid #dcdde1' }}>
                                    <span style={{ 
                                        backgroundColor: '#fff3e0',
                                        padding: '4px 8px',
                                        borderRadius: '4px',
                                        color: '#e65100'
                                    }}>
                                        {user.bank.cardExpire}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    </table> 
                    <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
                        <Pagination
                            current={currentPage}
                            onChange={handlePageChange}
                            total={users.length}
                            pageSize={itemsPerPage}
                        />
                    </div>
        </div>
    )
}
export default HomePage;