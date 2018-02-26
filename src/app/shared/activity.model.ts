/**
 * Created by valdemar on 26.02.18.
 */
export interface IActivity {
    id: number,
    name: string,
    date: Date,
    comments?: string,
    distance?: number,
    gpxData: string
}
