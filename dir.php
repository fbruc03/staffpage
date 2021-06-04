var files = <?php $out = array();
foreach (glob('img/*') as $filename) {
    $p = pathinfo($filename);
    $out[] = $p['basename'];
}
echo json_encode($out); ?>;