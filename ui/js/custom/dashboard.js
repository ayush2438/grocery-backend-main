$(function () {
    // Load orders
    $.get(orderListApiUrl, function (response) {
        if (response) {
            var table = '';
            var totalCost = 0;

            $.each(response, function(index, order) {
                var total = parseFloat(order.total);
                if (isNaN(total)) total = 0;
                totalCost += total;

                table += '<tr class="order-row" data-order-id="' + order.order_id + '">' +
                    '<td>' + formatDate(order.datetime) + '</td>' +
                    '<td>' + order.order_id + '</td>' +
                    '<td>' + order.customer_name + '</td>' +
                    '<td>' + total.toFixed(2) + ' Rs</td>' +
                    '</tr>';
            });

            table += '<tr><td colspan="3" style="text-align: end"><b>Total</b></td><td><b>' + totalCost.toFixed(2) + ' Rs</b></td></tr>';
            $("table").find('tbody').empty().html(table);
        }
    });
});

// ✅ Date formatter
function formatDate(isoString) {
    if (!isoString) return '';
    const date = new Date(isoString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}`;
}

// ✅ Click handler for order rows
$(document).on('click', '.order-row', function () {
    var orderId = $(this).data('order-id');

    $.get('http://127.0.0.1:5000/getOrderDetails/' + orderId, function (response) {

        if (response && response.length > 0) {
            var html = '<h4>Order #' + orderId + ' Details</h4>';
            html += '<table class="table table-bordered"><thead><tr>' +
                '<th>Product ID</th><th>Product Name</th><th>Quantity</th><th>Total Price</th></tr></thead><tbody>';

            response.forEach(function (item) {
                html += '<tr>' +
                    '<td>' + item.product_id + '</td>' +
                    '<td>' + item.product_name + '</td>' +
                    '<td>' + item.quantity + '</td>' +
                    '<td>' + parseFloat(item.total_price).toFixed(2) + ' Rs</td>' +
                    '</tr>';
            });

            html += '</tbody></table>';
            $('#userProfileModal .modal-body').html(html);
        } else {
            $('#userProfileModal .modal-body').html('<p>No order details found.</p>');
        }

        $('#userProfileModal').modal('show');
    });
});
