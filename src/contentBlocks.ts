export interface ContentBlock {
    /**
     * Represents the type of block
     */
    type: string,

    /**
     * Data associated with the current block
     */
    data: any
}

export interface Header extends ContentBlock {
    
}
