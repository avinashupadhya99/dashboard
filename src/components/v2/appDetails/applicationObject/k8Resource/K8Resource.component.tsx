import React, { useState } from 'react';
import { iNode, iNodeType } from './node.type';
import NodeTreeComponent from './NodeTree.component';
import ServiceComponent from './nodeType/Service.component';
import FilterResource from './FilterResource';
import GenericInfoComponent from './nodeType/GenericInfo.component';
import './k8resources.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useRouteMatch, useParams } from 'react-router';
import AllPodsComponent from './nodeType/AllPods.component';
import DefaultViewTabComponent from '../defaultViewTab/DefaultViewTab.component';

export default function K8ResourceComponent(props) {
    const [selectedNode, setSelectedNode] = useState<iNode | undefined>(undefined)
    const { path, url } = useRouteMatch();
    const params = useParams<{ node: string; kind: string; appId: string; envId: string }>();

    const updateNodeInfoCB = (node: iNode) => {
        setSelectedNode(node)
    }

    // useEffect(() => {
    //     ApplicationObjectStore.markApplicationObjectTabActive(URLS.APP_DETAILS_K8)
    //     props.handleNodeChange()
    // }, [])

    return (
        <div className="bcn-0">
            <div className="pt-16 pl-20 pb-16"><FilterResource /></div>
            <div className="container-fluid">
                <div className="row" >
                    <div className="col-2 k8-resources-node-tree"> <NodeTreeComponent updateNodeInfo={updateNodeInfoCB} /></div>
                    <div className="col">
                        <Switch>
                            {/* <Route exact path={`${url}/${iNodeType.Pods}/:podName/:action`} render={() => { return <DefaultViewTabComponent /> }} /> */}
                            <Route exact path={`${url}/${iNodeType.Pods}`} render={() => { return <AllPodsComponent selectedNodeType={iNodeType.Pods} /> }} />
                            <Route exact path={`${url}/${iNodeType.Service}`} render={() => { return <ServiceComponent selectedNodeType={iNodeType.Service} /> }} />
                            <Route exact path={`${url}/${iNodeType.GenericInfo}`} render={() => { return <GenericInfoComponent selectedNodeType={iNodeType.GenericInfo} /> }} />
                            <Redirect  to={`${url}/${iNodeType.Pods}`} />
                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    )
}