// React
import { useState } from 'react';

// Styles
import './CSS/tableComponent.css';
import { LuDownload } from "react-icons/lu";

interface TableComponentProps {
    filterOptions?: string[];
    tableHeaders: string[];
    tableContent: { [key: string]: string }[];
}

export default function TableComponent({
    tableHeaders,
    tableContent,
    
}: TableComponentProps) {
    const [descriptionInfo, setDescriptionInfo] = useState<string>('');
    const [showModalDescription, setShowModalDescription] = useState<boolean>(false);

    const toggleModalDescription = () => {
        setShowModalDescription(prev => !prev);
    };

    return (
        <>
            <div className='wrapper-table'>
                <table className='table-container'>
                    <thead>
                        <tr>
                            {tableHeaders.map((header, id) => (
                                <th key={id} className='th-header-encomendas'>
                                    {
                                        header === 'Img' && ('Imagem Produto') ||
                                        header === 'Icon' && ('') ||
                                        header
                                    }
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {tableContent.map((row, idx) => (
                            <tr key={idx}>
                                {tableHeaders.map((header, id) => {
                                    const key = header.toLowerCase();
                                    const value = row[key];

                                    return (
                                        <td key={id}>
                                            {key === 'cores' && Array.isArray(value) && (
                                                <div className='container-colrs-model'>
                                                    {(() => {
                                                        const maxCores = 7;
                                                        const coresMostradas = value.slice(0, maxCores);
                                                        const coresExtras = value.length - maxCores;

                                                        return (
                                                            <>
                                                               {(coresMostradas as unknown as string[]).map((cor, i) => (
                                                                    <div
                                                                        key={i}
                                                                        className="color-square"
                                                                        style={{ backgroundColor: cor }}
                                                                        title={cor}
                                                                    />
                                                                ))}
                                                                {coresExtras > 0 && (
                                                                    <div className="color-square extra-colors-indicator">
                                                                        +{coresExtras}
                                                                    </div>
                                                                )}
                                                            </>
                                                        );
                                                    })()}
                                                </div>
                                            )}

                                            {key === 'working' && typeof value === 'string' && (
                                                <button className={`btn-estado ${value.toLowerCase()}`}>
                                                    {value}
                                                </button>
                                            )}

                                            {key === 'escolher' && (
                                                <input
                                                    className='checkbox-model'
                                                    type='checkbox'
                                                    checked={!!value}
                                                    readOnly
                                                />
                                            )}

                                            {key === 'descricao' && typeof value === 'string' && (
                                                <button
                                                    className='btn-inside-table'
                                                    onClick={() => {
                                                        setDescriptionInfo(value);
                                                        toggleModalDescription();
                                                    }}
                                                >
                                                    Ver Descrição
                                                </button>
                                            )}

                                            {key === 'img' && typeof value === 'string' && (
                                                <img
                                                    src={value}
                                                    alt='imagem do Produto'
                                                    className='img-product'
                                                />
                                            )}

                                            
                                            {key === 'download' && (
                                                <button
                                                    className='btn-inside-table icon'
                                                    onClick={() => {
                                                        setDescriptionInfo(value);
                                                        toggleModalDescription();
                                                    }}
                                                >
                                                    <LuDownload size={22} />
                                                </button>
                                            )}

                                            {/* Campos comuns */}
                                            {key !== 'descricao' &&
                                                key !== 'cores' &&
                                                key !== 'img' &&
                                                key !== 'working' &&
                                                key !== 'escolher' &&
                                                key !== 'download' &&
                                                value}
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
