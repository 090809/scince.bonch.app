<?php


trait SomeTrait {
    public function one() {
        echo 'one';
    }
}

class A {
    public $varibale;
    use SomeTrait;
    public function __get($name)
    {
        switch ($name)
        {
            case 'someMagic':
                return 'THIS IS MAGIC';
        }
        return null;
        // TODO: Implement __get() method.
    }

    public function __set($name, $value)
    {
        // TODO: Implement __set() method.
    }

    public function __isset($name)
    {
        if ($name === 'someMagic') return true;
        return false;
    }

    public function two(string $qwe) : void
    {
        echo 'two';
    }
}

class B extends A {
    public function one() {
        $var = $this->someMagic; //$var = 'THIS IS MAGIC';
        $this->two('string');
        echo 'one from trait in A overrided';
    }
}

