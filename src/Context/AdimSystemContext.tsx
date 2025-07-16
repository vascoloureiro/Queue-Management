// React 
import { createContext, useState } from 'react';


//Tppe
import {AdminContextType} from './types/AdminSystemContext.ts'

export const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  
  
  const [nameAdmin, setNameAdmin] = useState<string>('Admin');
  const [weekDay, setWeekDay] = useState<string>('Monday');

  const [infoValue, setInfoValue] = useState<string[]>(['20', '12' , '4.2', 'Vasco Loureiro']);
  const [valuePercentage,setValuePercentage] = useState<number[]>([10, 5, 8]);
  
  const [medianTimeGraph,setMedianTimeGraph] = useState<number[]>([10, 20, 40, 20, 50, 45, 35]);
  const [previousMedianTimeGraph,setPreviousMedianTimeGraph] = useState<number[]>([20, 28, 42, 30, 40, 35, 25]);


  return (
    <AdminContext.Provider value={{ 

        nameAdmin, setNameAdmin,
        weekDay, setWeekDay,

        infoValue, setInfoValue,
        valuePercentage,setValuePercentage,
        medianTimeGraph, setMedianTimeGraph,
        previousMedianTimeGraph,setPreviousMedianTimeGraph
    }}>
      {children}
    </AdminContext.Provider>
  );
};
