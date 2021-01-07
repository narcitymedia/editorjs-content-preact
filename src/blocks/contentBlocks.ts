export enum BlockType {
    Header = "header",
    Paragraph = "paragraph",
    List = "list",
    RawHTML= "raw",
    Delimiter = "delimiter"
}

export enum ListStyle {
    Ordered = 'ordered',
    Unordered = 'unordered'
}

export interface ContentBlock {
    /**
     * Represents the type of block
     */
    type: string,

    /**
     * Data associated with the current block
     */
    data: unknown,

    /**
     * Uniquely identifies the block within the content
     */
    contentUniqueId: string
}

export interface HeaderBlock extends ContentBlock {
    data: {
        /**
         * Text contained in the current header. May contain markup.
         */
        text: string,

        /**
         * Represents the hierarcical level of the current Header
         */
        level: number
    } 
}

export interface ParagraphBlock extends ContentBlock {
    data: {
        /**
         * Text contained in the current paragraph. May contain markup.
         */
        text: string
    }
}

export interface ListBlock extends ContentBlock {
    data: {
        /**
         * Indicates the type of list
         */
        style: ListStyle,

        /**
         * The items contained in the current list. Each string may contain markup.
         */
        items: string[]
    }
}

export interface RawHTMLBlock extends ContentBlock {
    data: {
        html: string
    }
}

export interface DelimiterBlock extends ContentBlock {}
