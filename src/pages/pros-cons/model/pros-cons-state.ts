/**
 * Model class for holding the new-page state.
 */
export class ProsConsState
{
    constructor(
        readonly pro: number,
        readonly con: number,
        readonly conclusion: string
    ) {}
}
