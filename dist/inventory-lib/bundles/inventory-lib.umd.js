(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/router'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('inventory-lib', ['exports', '@angular/core', '@angular/router', '@angular/common'], factory) :
    (factory((global['inventory-lib'] = {}),global.ng.core,global.ng.router,global.ng.common));
}(this, (function (exports,i0,router,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var InventoryLibService = (function () {
        function InventoryLibService() {
        }
        InventoryLibService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        InventoryLibService.ctorParameters = function () { return []; };
        /** @nocollapse */ InventoryLibService.ngInjectableDef = i0.defineInjectable({ factory: function InventoryLibService_Factory() { return new InventoryLibService(); }, token: InventoryLibService, providedIn: "root" });
        return InventoryLibService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var InventoryLibComponent = (function () {
        function InventoryLibComponent() {
        }
        /**
         * @return {?}
         */
        InventoryLibComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        InventoryLibComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-inventory-lib',
                        template: "\n    <p>\n      inventory-lib works!\n    </p>\n  ",
                        styles: []
                    },] },
        ];
        /** @nocollapse */
        InventoryLibComponent.ctorParameters = function () { return []; };
        return InventoryLibComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var InventoryLibModule = (function () {
        function InventoryLibModule() {
        }
        InventoryLibModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [],
                        declarations: [InventoryLibComponent],
                        exports: [InventoryLibComponent]
                    },] },
        ];
        return InventoryLibModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var OrderListComponent = (function () {
        function OrderListComponent() {
        }
        /**
         * @return {?}
         */
        OrderListComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        OrderListComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'app-order-list',
                        template: "<p>\n  order-list works!\n</p>\n",
                        styles: [""]
                    },] },
        ];
        /** @nocollapse */
        OrderListComponent.ctorParameters = function () { return []; };
        return OrderListComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var /** @type {?} */ routes = [
        {
            path: '',
            component: OrderListComponent
        }
    ];
    var OrdersRoutingModule = (function () {
        function OrdersRoutingModule() {
        }
        OrdersRoutingModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [router.RouterModule.forChild(routes)],
                        exports: [router.RouterModule]
                    },] },
        ];
        return OrdersRoutingModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    var OrdersModule = (function () {
        function OrdersModule() {
        }
        OrdersModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            OrdersRoutingModule
                        ],
                        declarations: [OrderListComponent]
                    },] },
        ];
        return OrdersModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    exports.InventoryLibService = InventoryLibService;
    exports.InventoryLibComponent = InventoryLibComponent;
    exports.InventoryLibModule = InventoryLibModule;
    exports.OrdersModule = OrdersModule;
    exports.OrderListComponent = OrderListComponent;
    exports.ɵa = OrdersRoutingModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW52ZW50b3J5LWxpYi51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL2ludmVudG9yeS1saWIvbGliL2ludmVudG9yeS1saWIuc2VydmljZS50cyIsIm5nOi8vaW52ZW50b3J5LWxpYi9saWIvaW52ZW50b3J5LWxpYi5jb21wb25lbnQudHMiLCJuZzovL2ludmVudG9yeS1saWIvbGliL2ludmVudG9yeS1saWIubW9kdWxlLnRzIiwibmc6Ly9pbnZlbnRvcnktbGliL2xpYi9vcmRlci1saXN0L29yZGVyLWxpc3QuY29tcG9uZW50LnRzIiwibmc6Ly9pbnZlbnRvcnktbGliL2xpYi9vcmRlcnMtcm91dGluZy5tb2R1bGUudHMiLCJuZzovL2ludmVudG9yeS1saWIvbGliL29yZGVycy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBJbnZlbnRvcnlMaWJTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWludmVudG9yeS1saWInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxwPlxuICAgICAgaW52ZW50b3J5LWxpYiB3b3JrcyFcbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgSW52ZW50b3J5TGliQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJbnZlbnRvcnlMaWJDb21wb25lbnQgfSBmcm9tICcuL2ludmVudG9yeS1saWIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtJbnZlbnRvcnlMaWJDb21wb25lbnRdLFxuICBleHBvcnRzOiBbSW52ZW50b3J5TGliQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBJbnZlbnRvcnlMaWJNb2R1bGUgeyB9XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtb3JkZXItbGlzdCcsXG4gIHRlbXBsYXRlOiBgPHA+XG4gIG9yZGVyLWxpc3Qgd29ya3MhXG48L3A+XG5gLFxuICBzdHlsZXM6IFtgYF1cbn0pXG5leHBvcnQgY2xhc3MgT3JkZXJMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXMsIFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmltcG9ydCB7IE9yZGVyTGlzdENvbXBvbmVudCB9IGZyb20gJy4vb3JkZXItbGlzdC9vcmRlci1saXN0LmNvbXBvbmVudCc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJycsXG4gICAgY29tcG9uZW50OiBPcmRlckxpc3RDb21wb25lbnRcbiAgfVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgT3JkZXJzUm91dGluZ01vZHVsZSB7IH1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBPcmRlcnNSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9vcmRlcnMtcm91dGluZy5tb2R1bGUnO1xuaW1wb3J0IHsgT3JkZXJMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9vcmRlci1saXN0L29yZGVyLWxpc3QuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBPcmRlcnNSb3V0aW5nTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW09yZGVyTGlzdENvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgT3JkZXJzTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkluamVjdGFibGUiLCJDb21wb25lbnQiLCJOZ01vZHVsZSIsIlJvdXRlck1vZHVsZSIsIkNvbW1vbk1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBT0U7U0FBaUI7O29CQUxsQkEsYUFBVSxTQUFDO3dCQUNWLFVBQVUsRUFBRSxNQUFNO3FCQUNuQjs7Ozs7a0NBSkQ7Ozs7Ozs7QUNBQTtRQWFFO1NBQWlCOzs7O1FBRWpCLHdDQUFROzs7WUFBUjthQUNDOztvQkFkRkMsWUFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxtQkFBbUI7d0JBQzdCLFFBQVEsRUFBRSxxREFJVDt3QkFDRCxNQUFNLEVBQUUsRUFBRTtxQkFDWDs7OztvQ0FWRDs7Ozs7OztBQ0FBOzs7O29CQUdDQyxXQUFRLFNBQUM7d0JBQ1IsT0FBTyxFQUFFLEVBQ1I7d0JBQ0QsWUFBWSxFQUFFLENBQUMscUJBQXFCLENBQUM7d0JBQ3JDLE9BQU8sRUFBRSxDQUFDLHFCQUFxQixDQUFDO3FCQUNqQzs7aUNBUkQ7Ozs7Ozs7QUNBQTtRQVlFO1NBQWlCOzs7O1FBRWpCLHFDQUFROzs7WUFBUjthQUNDOztvQkFiRkQsWUFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7d0JBQzFCLFFBQVEsRUFBRSxrQ0FHWDt3QkFDQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUM7cUJBQ2I7Ozs7aUNBVEQ7Ozs7Ozs7QUNBQSxJQUtBLHFCQUFNLE1BQU0sR0FBVztRQUNyQjtZQUNFLElBQUksRUFBRSxFQUFFO1lBQ1IsU0FBUyxFQUFFLGtCQUFrQjtTQUM5QjtLQUNGLENBQUM7Ozs7O29CQUVEQyxXQUFRLFNBQUM7d0JBQ1IsT0FBTyxFQUFFLENBQUNDLG1CQUFZLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUN4QyxPQUFPLEVBQUUsQ0FBQ0EsbUJBQVksQ0FBQztxQkFDeEI7O2tDQWZEOzs7Ozs7O0FDQUE7Ozs7b0JBTUNELFdBQVEsU0FBQzt3QkFDUixPQUFPLEVBQUU7NEJBQ1BFLG1CQUFZOzRCQUNaLG1CQUFtQjt5QkFDcEI7d0JBQ0QsWUFBWSxFQUFFLENBQUMsa0JBQWtCLENBQUM7cUJBQ25DOzsyQkFaRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==