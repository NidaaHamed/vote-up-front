<template>
    <div class="container">
        <div class="row">
            <h1>Results</h1>
        </div>
        <div class="row">
            <b-card-group style="margin: 5px;">
                <b-card bg-variant="success" text-variant="white" header="All Voters" class="text-center" align="center">
                    <b-card-text>400</b-card-text>
                </b-card>

                <b-card bg-variant="warning" text-variant="white" header="Voted" class="text-center">
                    <b-card-text>300</b-card-text>
                </b-card>

                <b-card bg-variant="danger" text-variant="white" header="Not Voted" class="text-center">
                    <b-card-text>100</b-card-text>
                </b-card>
            </b-card-group>
        </div>
        <div class="row">
            <b-card-group style="margin: 5px;">
                <b-card bg-variant="dark" text-variant="white" header="President" class="text-center" align="center">
                <b-card-text>
                    <b-list-group style="max-width: 300px;">
                <b-list-group-item class="d-flex align-items-center">
                    <b-avatar class="mr-3"></b-avatar>
                    <span class="mr-auto">J. Circlehead</span>
                    <b-badge>50</b-badge>
                </b-list-group-item>
                <b-list-group-item class="d-flex align-items-center">
                    <b-avatar variant="primary" text="BV" class="mr-3"></b-avatar>
                    <span class="mr-auto">BootstrapVue</span>
                    <b-badge>100</b-badge>
                </b-list-group-item>
                <b-list-group-item class="d-flex align-items-center">
                    <b-avatar variant="info" src="https://placekitten.com/300/300" class="mr-3"></b-avatar>
                    <span class="mr-auto">Super Kitty</span>
                    <b-badge>90</b-badge>
                </b-list-group-item>
                <b-list-group-item class="d-flex align-items-center">
                    <b-avatar variant="success" icon="people-fill" class="mr-3"></b-avatar>
                    <span class="mr-auto">ACME group</span>
                    <b-badge>60</b-badge>
                </b-list-group-item>
            </b-list-group>
                </b-card-text>
            </b-card>

                <b-card bg-variant="dark" text-variant="white" header="VP Academic" class="text-center" align="center">
                <b-card-text>
                    <b-list-group style="max-width: 300px;">
                <b-list-group-item class="d-flex align-items-center">
                    <b-avatar class="mr-3"></b-avatar>
                    <span class="mr-auto">J. Circlehead</span>
                    <b-badge>50</b-badge>
                </b-list-group-item>
                <b-list-group-item class="d-flex align-items-center">
                    <b-avatar variant="primary" text="BV" class="mr-3"></b-avatar>
                    <span class="mr-auto">BootstrapVue</span>
                    <b-badge>100</b-badge>
                </b-list-group-item>
                <b-list-group-item class="d-flex align-items-center">
                    <b-avatar variant="info" src="https://placekitten.com/300/300" class="mr-3"></b-avatar>
                    <span class="mr-auto">Super Kitty</span>
                    <b-badge>90</b-badge>
                </b-list-group-item>
                <b-list-group-item class="d-flex align-items-center">
                    <b-avatar variant="success" icon="people-fill" class="mr-3"></b-avatar>
                    <span class="mr-auto">ACME group</span>
                    <b-badge>60</b-badge>
                </b-list-group-item>
            </b-list-group>
                </b-card-text>
            </b-card>

                <b-card bg-variant="dark" text-variant="white" header="VP Student Life" class="text-center" align="center">
                <b-card-text>
                    <b-list-group style="max-width: 300px;">
                <b-list-group-item class="d-flex align-items-center">
                    <b-avatar class="mr-3"></b-avatar>
                    <span class="mr-auto">J. Circlehead</span>
                    <b-badge>50</b-badge>
                </b-list-group-item>
                <b-list-group-item class="d-flex align-items-center">
                    <b-avatar variant="primary" text="BV" class="mr-3"></b-avatar>
                    <span class="mr-auto">BootstrapVue</span>
                    <b-badge>100</b-badge>
                </b-list-group-item>
                <b-list-group-item class="d-flex align-items-center">
                    <b-avatar variant="info" src="https://placekitten.com/300/300" class="mr-3"></b-avatar>
                    <span class="mr-auto">Super Kitty</span>
                    <b-badge>90</b-badge>
                </b-list-group-item>
                <b-list-group-item class="d-flex align-items-center">
                    <b-avatar variant="success" icon="people-fill" class="mr-3"></b-avatar>
                    <span class="mr-auto">ACME group</span>
                    <b-badge>60</b-badge>
                </b-list-group-item>
            </b-list-group>
                </b-card-text>
            </b-card>
            </b-card-group>
            
            
            
        </div>
        
    </div>
</template>
<style scoped>
.card {
    margin: 20px;
    border-radius: 10px !important;
}
.badge {
    background-color: #aaa;
    
}
</style>