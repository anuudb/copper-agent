import * as _ from 'lodash'
import * as React from 'react'
import { Container, ContainerListItem } from './containerListItem'
import { ContainerList } from './ContainerList'


class AppState {
    containers?: Container[]
    stoppedContainers?: Container[]
}

export class AppComponent extends React.Component<{}, AppState> {

    constructor() {
        super()
        const partitioned = _.partition(this.containers, c => c.state == 'running')
        this.state = {
            containers: partitioned[0],
            stoppedContainers: partitioned[1]
        }
    }

    containers: Container[] = [
        {
            id: '1',
            name: 'test container',
            image: 'some image',
            state: 'running',
            status: 'Running'
        },
        {
            id: '2',
            name: 'another test container',
            image: 'some image',
            state: 'stopped',
            status: 'Running'
        }
    ]

    render() {
        return (
            <div className="container">
                <h1 className="page-header">Docker Dashboard</h1>
                <ContainerList title="Running" containers={this.state.containers} />
                <ContainerList title="Stopped containers" containers={this.state.stoppedContainers} />
            </div>
        )
    }
}




