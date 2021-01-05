export enum BlockType {
    Header = "header",
    Paragraph = "paragraph",
    List = "list",
    RawHTML= "raw",
    Delimiter = "delimiter"
}

export interface ContentBlock {
    /**
     * Represents the type of block
     */
    type: string,

    /**
     * Data associated with the current block
     */
    data: unknown

    /**
     * Uniquely identifies the block within the content
     */
    contentUniqueId: string
}

export interface HeaderBlock extends ContentBlock {
    
}

export interface ParagraphBlock extends ContentBlock {
    data: {
        /**
         * Text contained in the current paragraph. May contain markup.
         */
        text: string
    }
}
