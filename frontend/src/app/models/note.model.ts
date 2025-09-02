export class Note {
    constructor(
        public note_id: number,
        public title: string,
        public content: string,
        public pinned: boolean,
        public created_at: Date,
        public updated_at: Date,
        public due_date: Date,
        public priority_id: number,
        public status_id: number,
        public notebook_id: number,
        public created_by: number,
        public assigned_to: number,
        public deleted: boolean,
        public archived: boolean,
    ) { }

}
