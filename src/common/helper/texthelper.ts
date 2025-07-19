//src\common\helper\texthelper.ts


/**
 * class TextHelper.capitalize
 */
export class TextHelper {
    /**
     * Replaces all occurrences of a substring in a string with another substring.
     * @param content The original string.
     * @param searchValue The substring to search for.
     * @param replaceValue The substring to replace with.
     * @returns The modified string with all occurrences replaced.
     */
    public static replaceAll(content: string, searchValue: string, replaceValue: string): string {
        let found: boolean = true;
        while (found) {
            const position: number = content.indexOf(searchValue);
            if(position>= 0) {
                content = content.replace(searchValue, replaceValue);
            }
            else{found = false;}
        }
        return content;
    };//end

    static isEmpty(value: string | undefined | null): boolean {
        return !value || value.trim().length === 0;
    }

    static isNotEmpty(value: string | undefined | null): boolean {
        return !this.isEmpty(value);
    }

    static toLowerCase(value: string): string {
        return value.toLowerCase();
    }    
    public static capitalize(value: string): string {
        if (this.isEmpty(value)) {
            return value;
        }
        return value.charAt(0).toUpperCase() + value.slice(1);
    }

    public static uncapitalize(value: string): string {
        if (this.isEmpty(value)) {
            return value;
        }
        return value.charAt(0).toLowerCase() + value.slice(1);
    }

    public static toCamelCase(value: string): string {
        if (this.isEmpty(value)) {
            return value;
        }
        const words = value.split(' ');
        return words.map((word, index) => {
            return index === 0 ? this.uncapitalize(word) : this.capitalize(word);
        }).join('');
    }

    public static toSnakeCase(value: string): string {
        if (this.isEmpty(value)) {
            return value;
        }
        return value.replace(/\s+/g, '_').toLowerCase();
    }

    public static toKebabCase(value: string): string {
        if (this.isEmpty(value)) {
            return value;
        }
        return value.replace(/\s+/g, '-').toLowerCase();
    }

    public static toPascalCase(value: string): string {
        if (this.isEmpty(value)) {
            return value;
        }
        const words = value.split(' ');
        return words.map(word => this.capitalize(word)).join('');
    }

}//end class