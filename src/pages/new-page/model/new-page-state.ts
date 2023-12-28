/**
 * Model class for holding the new-page state.
 */
export class NewPageState
{
    constructor(
        readonly pro: number,
        readonly con: number,
        readonly conclusion: string
    ) {}
}
