import { Story } from './models/Story';
import { User } from './models/User';
export declare class PlayerVideoComponent {
    stories: Story[];
    user: User;
    storiesChange(updateStories: Story[]): void;
    constructor();
}
