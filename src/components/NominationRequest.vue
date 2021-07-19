<template>
    <div>
        <div>
            <h1>Manage Nomination Requests</h1>
        </div>
        <b-list-group>
            <b-list-group-item>
                <b-card img-src="https://placekitten.com/300/300" img-alt="Card image" img-left class="mb-3">
                    <b-card-text>
                        <p>Ahmed</p>
                        <b-button-group>
                            <b-button variant="success">Accept</b-button>
                            <b-button variant="warning">Ignore</b-button>
                        </b-button-group>
                    </b-card-text>
                </b-card>
            </b-list-group-item>
            <b-list-group-item>
                <b-card img-src="https://placekitten.com/300/300" img-alt="Card image" img-left class="mb-3">
                    <b-card-text>
                        <p>Sayed</p>
                        <b-button-group>
                            <b-button variant="success">Accept</b-button>
                            <b-button variant="warning">Ignore</b-button>
                        </b-button-group>
                    </b-card-text>
                </b-card>
            </b-list-group-item>
            <b-list-group-item>
                <b-card img-src="https://placekitten.com/300/300" img-alt="Card image" img-left class="mb-3">
                    <b-card-text>
                        <p>Amr</p>
                        <b-button-group>
                            <b-button variant="success">Accept</b-button>
                            <b-button variant="warning">Ignore</b-button>
                        </b-button-group>
                    </b-card-text>
                </b-card>
            </b-list-group-item>
            <b-list-group-item>
                <b-card img-src="https://placekitten.com/300/300" img-alt="Card image" img-left class="mb-3">
                    <b-card-text>
                        <p>Waeel</p>
                        <b-button-group>
                            <b-button variant="success">Accept</b-button>
                            <b-button variant="warning">Ignore</b-button>
                        </b-button-group>
                    </b-card-text>
                </b-card>
            </b-list-group-item>
       </b-list-group>
    </div>
</template>
<style scoped>
h1 {
    font-size: 24px;
}
.list-group-item {
    height: 80px;
    padding: 8px 8px 9px 8px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}
.card {
    height: 100%;
    border: none;
}
img {
    border-radius: 50% !important;
}
.card-text {
    display: flex;
    justify-content: space-between;
}
.card-text .btn {
    margin-right: 5px;
    border-radius: 5px !important;
}
</style>