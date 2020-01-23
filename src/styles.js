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
        height: 3em;
    }

    tbody>tr:nth-child(even) {
        background-color: #f2f2f2;
    }

    tbody>tr>td {
        padding: 0.5em;
    }

`;

export const ActionButton = styled.button`
    width: 25em;
    margin: 5em 15em;
`;