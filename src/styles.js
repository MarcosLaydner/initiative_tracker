import styled from 'styled-components';

export const Main = styled.body`
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
`;

export const InitiativeTable = styled.table`

    thead>tr>th {
        background-color: black;
        color: white;
        padding: 1% 0%;
        width: 30%;
    }

    tbody>tr:nth-child(even) {
        background-color: #f2f2f2;
    }

    tbody>tr:hover {
        background-color: #f5f5fF;
    }

    tbody>tr>td {
        padding: 0.5%;
    }

    tfoot>tr>td {
        padding: 1%;
        width: 30%;
    }

    tfoot>tr>td>input {
        width: 80%;
        padding: 2%;
        border-radius: 0;
    }

    td>button {
        background-color: black;
        color: white;
        width: 100%;
        padding: 10%
    }
`;

export const ActionButton = styled.button`
    width: 25%;
    padding: 1%;
    background-color: black;
    color: white;
    font-size: 75%;
`;