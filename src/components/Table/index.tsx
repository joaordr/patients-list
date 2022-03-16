import { useContext, useEffect } from 'react';
import { RiArrowUpDownFill } from "react-icons/ri";

import { PacientsContext } from '../../contexts/PacientsContext';
import Loader from '../Loader';
import TableRow from './TableRow';

import styles from './table.module.scss';

export default function Table() {
    const { pacients, ordenateByName, ordenateByGender, isLoading, isFetching } = useContext(PacientsContext);
    useEffect(() => {
        if (isLoading || isFetching) {
            document.getElementById('table_container').scrollTop = 0;
            document.getElementById('table_container').style.overflow = "hidden";
        } else {
            document.getElementById('table_container').style.overflow = "auto";
        }
    }, [isLoading, isFetching]);
    return (
        <div id="table_container" className={styles.container}>
            <Loader />
            <table>
                <thead>
                    <tr>
                        <th scope="col" onClick={ordenateByName}>
                            <div>
                                <p>Nome</p><span><RiArrowUpDownFill /></span>
                            </div>
                        </th>
                        <th scope="col" onClick={ordenateByGender}>
                            <div>
                                <p>Gênero</p><span><RiArrowUpDownFill /></span>
                            </div>
                        </th>
                        <th scope="col">Nascimento</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {pacients.map(pacient => {
                        return <TableRow key={pacient.login.uuid} pacient={pacient} />
                    })}

                </tbody>
            </table>
        </div>

    )
}