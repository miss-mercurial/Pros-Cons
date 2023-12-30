/**
 * Model class for holding the pros-cons state.
 */
export class ProsConsState
{
    constructor(
        readonly pro: number,
        readonly con: number,
        readonly conclusion: string
    ) {}
}
