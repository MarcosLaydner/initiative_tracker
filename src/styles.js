import styled from 'styled-components';

export const Main = styled.body`
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
`;

export const InitiativeTable = styled.table`

    border-spacing: 0;

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
        padding: 0.5% 1%;
    }

    tfoot>tr>td {
        padding: 1%;
        width: 30%;
    }

    input {
        width: 100%;
        padding: 2% 0;
        border-radius: 0;
    }

    td>button {
        background-color: black;
        color: white;
        width: 100%;
        padding: 10%
    }

    tfoot {
        background-color: #ccc;
    }
`;

export const ActionButton = styled.button`
    width: 100%;
    padding: 3%;
    background-color: black;
    color: white;
    font-size: 100%;
`;