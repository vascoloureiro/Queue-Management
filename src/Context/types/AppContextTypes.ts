export interface AppContextType {
    urlAPI?:string | 'http://localhost:3001';
    setUrlAPI: (url: string) => void;
}