'use strict';

const AUTHENTICATION_FAILURE_CODE = '403';

const VALIDATION_FAILURE_CODE = '422';

module.exports = function( S ) {

    return class EndpointVandium extends S.classes.Endpoint {

        constructor( data, func ) {

            super( data, func );

            let _this = this;

            if( func.runtime === 'nodejs4.3-vandium' && !data ) {

                _this.responses[ AUTHENTICATION_FAILURE_CODE ] = {

                    selectionPattern: '^authentication error.*',
                    statusCode: AUTHENTICATION_FAILURE_CODE
                };

                _this.responses[ VALIDATION_FAILURE_CODE ] = {

                    selectionPattern: '^validation error.*',
                    statusCode: VALIDATION_FAILURE_CODE
                }
            }
        }
    }
}
