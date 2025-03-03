export type Category = {
    // tag irá ser substituido pelo nome da categoria, assim torna o type 'dinamico'
    [tag: string] : {  
        title: string;
        color: string;
        expense: boolean;
    }
} 