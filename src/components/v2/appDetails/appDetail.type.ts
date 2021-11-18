export enum EnvType {
    CHART = 'CHART',
    APPLICATION = 'APPLICATION'
}

export interface EnvDetails {
    envType: EnvType,
    envId: number,
    appId: number
}


export enum AggregationKeys {
    Workloads = 'Workloads',
    Networking = 'Networking',
    ConfigAndStorage = 'Config & Storage',
    RBAC = 'RBAC',
    Administration = 'Administration',
    CustomResource = 'Custom Resource',
    Other = 'Other'
}

export enum NodeType {
    Service = 'Service',
    Alertmanager = 'Alertmanager',
    PodSecurity = 'PodSecurityPolicy',
    ConfigMap = 'ConfigMap',
    ServiceAccount = 'ServiceAccount',
    ClusterRoleBinding = 'ClusterRoleBinding',
    RoleBinding = 'RoleBinding',
    ClusterRole = 'ClusterRole',
    Role = 'Role',
    Prometheus = 'Prometheus',
    ServiceMonitor = 'ServiceMonitor',
    Deployment = 'Deployment',
    MutatingWebhookConfiguration = 'MutatingWebhookConfiguration',
    DaemonSet = 'DaemonSet',
    Secret = 'Secret',
    ValidatingWebhookConfiguration = 'ValidatingWebhookConfiguration',
    Pod = 'Pod',
    Ingress = 'Ingress',
    ReplicaSet = 'ReplicaSet',
    Endpoints = 'Endpoints',
    Cluster = 'ClusterRoleBinding',
    PodSecurityPolicy = 'PodSecurityPolicy',
    CronJob = 'CronJob',
    Job = 'Job',
    ReplicationController = 'ReplicationController',
    StatefulSet = 'StatefulSet',
    Rollout = 'Rollout',
    PersistentVolumeClaim = 'PersistentVolumeClaim',
    PersistentVolume = 'PersistentVolume',
    Containers = 'Containers',// containers are being trated same way as nodes for nsted table generation
    InitContainers = 'InitContainers'
}

// export type NodeType = keyof typeof NodeType;

export function getAggregator(nodeType: NodeType): AggregationKeys {
    switch (nodeType) {
        case NodeType.DaemonSet:
        case NodeType.Deployment:
        case NodeType.Pod:
        case NodeType.ReplicaSet:
        case NodeType.Job:
        case NodeType.CronJob:
        case NodeType.ReplicationController:
        case NodeType.StatefulSet:
            return AggregationKeys.Workloads;
        case NodeType.Ingress:
        case NodeType.Service:
        case NodeType.Endpoints:
            return AggregationKeys.Networking;
        case NodeType.ConfigMap:
        case NodeType.Secret:
        case NodeType.PersistentVolume:
        case NodeType.PersistentVolumeClaim:
            return AggregationKeys.ConfigAndStorage;
        case NodeType.ServiceAccount:
        case NodeType.ClusterRoleBinding:
        case NodeType.RoleBinding:
        case NodeType.ClusterRole:
        case NodeType.Role:
            return AggregationKeys.RBAC;
        case NodeType.MutatingWebhookConfiguration:
        case NodeType.PodSecurityPolicy:
        case NodeType.ValidatingWebhookConfiguration:
            return AggregationKeys.Administration;
        case NodeType.Alertmanager:
        case NodeType.Prometheus:
        case NodeType.ServiceMonitor:
            return AggregationKeys.CustomResource;
        default:
            return AggregationKeys.CustomResource;
    }
}

export interface AppDetails {
    appId: number
    appName: string
    appStoreAppName: string
    appStoreAppVersion: string
    appStoreChartId: number
    appStoreChartName: string
    appStoreInstalledAppVersionId: number
    ciArtifactId: number
    deprecated: false
    environmentId: number
    environmentName: string
    installedAppId: number
    instanceDetail: null
    k8sVersion: string
    lastDeployedBy: string
    lastDeployedTime: string
    namespace: string
    resourceTree: ResourceTree
}

export interface ResourceTree {
    conditions: any
    newGenerationReplicaSet: string
    nodes: Array<Node>
    podMetadata: any
    status: string
}

export interface Node {
    health: Health
    kind: NodeType
    name: string
    namespace: string
    networkingInfo: NetworkingInfo
    resourceVersion: string
    uid: string
    version: string,
    parentRefs: Array<Node>
}

export interface Health {
    status: string
}

export interface NetworkingInfo {
    targetLabels: TargetLabels
}

export interface TargetLabels {
    targetLabel: TargetLabel
}

export interface TargetLabel {
    "app.kubernetes.io/instance": string
    "app.kubernetes.io/name": string
}